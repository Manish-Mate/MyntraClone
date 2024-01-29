import { BagItem } from "../components/BagItem";
import { BagSummary } from "../components/BagSummary";
import { useSelector } from "react-redux";
export const Bag = () => {
  const bag = useSelector((store) => store.bag);
  const items = useSelector((store) => store.items);

  const finalItems = items.filter((item) => {
    const itemIndex = bag.includes(item.id);
    return itemIndex;
  });
  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {finalItems.map((item) => (
              <BagItem item={item} />
            ))}
          </div>

          <div className="bag-summary">
            <BagSummary />
          </div>
        </div>
      </main>
    </>
  );
};
