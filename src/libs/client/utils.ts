// ...classnames 무한으로 인자를 받음
// :string[] 배열 타입이어야 함
// string 배열을 join()하면서 리턴
export function cls(...classnames: string[]) {
  return classnames.join(' ');
}
