import { Container, Filters, ProductCard, ProductsGroupList, Title, TopBar } from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold"></Title>
      </Container>
      <TopBar></TopBar>

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          {/* Фильтрация */}
          <div className="w-[250px]">
          <Filters></Filters>
          </div>

          {/* Список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList title={"Пиццы"} categoryId={1} items={[
                {
                  id: 1,
                  name: 'Чизбургер-пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                  price: 550,
                  items: [{ price: 550}],
                },
                {
                  id: 2,
                  name: 'Чизбургер-пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                  price: 550,
                  items: [{ price: 550}],
                },
                {
                  id: 3,
                  name: 'Чизбургер-пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                  price: 550,
                  items: [{ price: 550}],
                },
                {
                  id: 4,
                  name: 'Чизбургер-пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                  price: 550,
                  items: [{ price: 550}],
                },
                {
                  id: 5,
                  name: 'Чизбургер-пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                  price: 550,
                  items: [{ price: 550}],
                },
                {
                  id: 6,
                  name: 'Чизбургер-пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                  price: 550,
                  items: [{ price: 550}],
                },
                {
                  id: 7,
                  name: 'Чизбургер-пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                  price: 550,
                  items: [{ price: 550}],
                },
                {
                  id: 8,
                  name: 'Чизбургер-пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                  price: 550,
                  items: [{ price: 550}],
                },
              ]}></ProductsGroupList>

              <ProductsGroupList title={"Завтрак"} categoryId={2} items={[
                {
                  id: 9,
                  name: 'Омлет с беконом',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7970326512C89366583FF997CA9E.avif',
                  price: 550,
                  items: [{ price: 550}],
                },
                {
                  id: 10,
                  name: 'Омлет с беконом',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7970326512C89366583FF997CA9E.avif',
                  price: 550,
                  items: [{ price: 550}],
                },
                {
                  id: 11,
                  name: 'Омлет с беконом',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7970326512C89366583FF997CA9E.avif',
                  price: 550,
                  items: [{ price: 550}],
                },
                {
                  id: 12,
                  name: 'Омлет с беконом',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7970326512C89366583FF997CA9E.avif',
                  price: 550,
                  items: [{ price: 550}],
                },
                {
                  id: 13,
                  name: 'Омлет с беконом',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7970326512C89366583FF997CA9E.avif',
                  price: 550,
                  items: [{ price: 550}],
                },
                {
                  id: 14,
                  name: 'Омлет с беконом',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7970326512C89366583FF997CA9E.avif',
                  price: 550,
                  items: [{ price: 550}],
                },
                {
                  id: 15,
                  name: 'Омлет с беконом',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7970326512C89366583FF997CA9E.avif',
                  price: 550,
                  items: [{ price: 550}],
                },
                {
                  id: 16,
                  name: 'Омлет с беконом',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7970326512C89366583FF997CA9E.avif',
                  price: 550,
                  items: [{ price: 550}],
                },
              ]}></ProductsGroupList>
            </div>
          </div>
        </div>
         
      </Container>
    </>
  );
}
