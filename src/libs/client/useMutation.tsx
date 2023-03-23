import React, { useState } from 'react';

interface UseMutationState {
  loading: boolean;
  data?: object;
  error?: object;
}

type UseMutationResult = [(data: any) => void, UseMutationState];

// useMutation 의 첫번째 인자는 url 을 받는다.
// useMutation 의 return type 은 array 는 2개의 item 을 가진다.,
const UseMutation = (
  url: string,
  // 타입스크립트를 쓰고 있다면, useMutation 의 return 타입을 지정해주어야 한다.
): UseMutationResult => {
  const [state, setState] = useState<UseMutationState>({
    loading: false,
    data: undefined,
    error: undefined,
  });
  function mutation(data: any) {
    setState((prev) => ({ ...prev, loading: true }));
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }) // response 를 받으면 response.json() 으로 return
      // response.json() 를 return 하면 다른 Promise 를 받게됨 (Body.json(): Promise<any>)
      .then((response) => response.json().catch(() => {}))
      // response.json() 이 작동하지 않을 수 있기 때문에 catch(아무것도 없이 return)
      // => response 에 json 이 없을 경우에만 해당하고, 이제 json 이 없어도 error 가 보이지 않을 것
      .then((data) => setState((prev) => ({ ...prev, data })))
      .catch((error) => setState((prev) => ({ ...prev, error })))
      .finally(() => setState((prev) => ({ ...prev, loading: false })));
  }
  return [mutation, { ...state }];
};

export default UseMutation;
