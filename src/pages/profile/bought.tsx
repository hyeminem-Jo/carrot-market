import type { NextPage } from 'next';
import Item from "@/components/item";
import Layout from "@/components/layout";

const Bought: NextPage = () => {
  return (
    <Layout title="구매내역" canGoBack>
      <div className="flex flex-col space-y-5 py-10">
        {[...Array(10).fill(1)].map((_, i) => (
          <Item title="iPhone 14" id={i} key={i} price={99} comments={1} hearts={1} />
        ))}
        {/* form 으로 이동 (상품 등록 버튼) */}
      </div>
    </Layout>
  );
};

export default Bought;
