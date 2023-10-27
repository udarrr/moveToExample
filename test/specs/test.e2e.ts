describe("My application", () => {
    it("moveTo in iframe", async () => {
      await browser.url("https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe");
      await (await browser.$("#root div.theme-switcher-menu > button > span")).moveTo(); //can be moved to here outside of iframe the element should be highlighted
      await browser.pause(5000)
      const iframe = await browser.$("#content > article > section:nth-child(3) > div > iframe");
      await browser.switchToFrame(iframe);
      await (await browser.$("#reset")).moveTo(); //can't be moved to here inside of iframe reset button should be highlighted
      await browser.pause(5000)
    });
});

describe("My application", () => {
  before(async () => {
    await browser.url("https://uk.javascript.info/mousemove-mouseover-mouseout-mouseenter-mouseleave");
    await (await browser.$('a[href="pointer.html"]')).click();
    await (await browser.$("#parent")).waitForExist()
  })

  it("moveTo in iframe", async () => {
    await (await browser.$("#parent")).moveTo();
    const value = await (await browser.$("#text")).getValue();

    expect(value.endsWith('center\n'))
  });

  it("moveTo in iframe", async () => {
    const iframe = await browser.$("iframe[scr='pointer.html']");
    await browser.switchToFrame(iframe);
    await (await browser.$("#parent")).moveTo()
    const value = await (await browser.$("#text")).getValue();
    
    expect(value.endsWith('center\n'))
  });
});
