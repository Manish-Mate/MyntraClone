import { BagItem } from "../components/BagItem";

import { useSelector } from "react-redux";
export const BagSummary = () => {
  const bag = useSelector((store) => store.bag);
  const items = useSelector((store) => store.items);

  const finalItems = items.filter((item) => {
    const itemIndex = bag.includes(item.id);
    return itemIndex;
  });
  let totalItem = bag.length;
  let totalMRP = 0;
  let totalDiscount = 0;
  const CONVENIENCE_FEES = 99;
  finalItems.forEach((bag) => {
    totalMRP += bag.original_price;
    totalDiscount += bag.original_price - bag.current_price;
  });

  let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;

  return (
    <>
      <div className="bag-details-container">
        <div className="price-header">PRICE DETAILS ({totalItem} Items) </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹99</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{finalPayment}</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </>
  );
};
