interface itemCardprops {
  name:string;
  price:number;
  inStock:boolean;
}

export default function Itemcard({ name, price, inStock }: itemCardprops) {
  return (
    <div>
      <h1>This is the item card</h1>
      <div style={{}}></div>
      <h2>{name}</h2>
    </div>
  );
}
