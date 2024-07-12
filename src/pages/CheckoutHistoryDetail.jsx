import { useParams } from "react-router-dom";
import useStore from "../stores/store";
import LinesEllipsis from "react-lines-ellipsis";
import star from "../assets/icons/star.svg";

const CheckoutHistoryDetail = () => {
  const { id } = useParams();
  const store = useStore();
  const history = store.history;

  const checkout = history.find((item) => item.id === id);

  console.log(checkout);

  return (
    <>
      <div className="max-w-3xl mx-auto px-4 grid gap-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl my-4 font-semibold">Detail Pembelian</h2>
          <h2 className="text-lg my-4 font-semibold">{checkout.date}</h2>
        </div>
        {checkout.products.map((product) => (
          <div key={product.id} className="flex gap-6 p-4 text-right border rounded-lg">
            <div className="grid gap-2">
              <img
                src={product.image}
                alt={product.title}
                className="w-20 h-20 object-contain justify-center items-center"
              />
              <div className="flex justify-between">
                <div className="flex gap-1 items-center text-xs tracking-tight">
                  <span className="flex gap-1">
                    <img src={star} alt="" />
                    {product.rating}
                  </span>
                  <span>|</span>
                  <span>{product.count}+ terjual</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <LinesEllipsis
                text={product.title}
                maxLine="2"
                ellipsis=" ... "
                trimRight
                basedOn="words"
                className="text-[14px] tracking-tight text-gray-600"
              />
              <p className="text-[14px]">{product.price} x {product.number}</p>
              <p className="text-[14px] font-bold">
                $ {(product.price * product.number).toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CheckoutHistoryDetail;
