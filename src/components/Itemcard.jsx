export default function ItemCard({ name, price, number }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <h1>You have bought goods worth Ksh{price}</h1>
      <h1>And you are number {number} in line</h1>
    </div>
  );
}
