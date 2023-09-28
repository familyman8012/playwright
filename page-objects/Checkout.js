export class Checkout {
  constructor(page) {
    this.page = page;

    this.basketCards = page.locator('[data-qa="basket-card"]');
    this.basketItemPrice = page.locator('[data-qa="basket-item-price"]');
    this.basketItemRemoveButton = page.locator(
      '[data-qa="basket-card-remove-item"]'
    );
  }

  removeCheapestProduct = async () => {
    await this.basketCards.first().waitFor();
    await this.basketItemPrice.first().waitFor();
    const allPriceTexts = await this.basketItemPrice.allInnerTexts();
    console.log({ allPriceTexts });
    allPriceTexts.map((element) => {
      const withoutDollarSign = element.replace("$", "");
      return parseInt(withoutDollarSign, 10);
    });
    await this.page.pause();
  };
}
