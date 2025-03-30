import { ReactNode } from "react";

interface ProductListProps {
  children: ReactNode;
}

const ProductList = ({ children }: ProductListProps) => {
  return (
    <div className="mx-auto w-5/5 lg:w-4/5  flex flex-wrap gap-10 items-center justify-center">
      {children}
    </div>
  );
};

export default ProductList;
