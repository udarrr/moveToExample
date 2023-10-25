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
  it("move to with scroll", async () => {
    try {
      await browser.url("https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe");
      await (await browser.$('#content td.bc-support.bc-browser-firefox_android span.bc-version-label')).moveTo()
      await browser.pause(5000)
    } catch (err: any){
      console.log(err.message)
    }
    await browser.url("https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe");
    await (await browser.$('#content td.bc-support.bc-browser-firefox_android span.bc-version-label')).scrollIntoView({block: 'center'})
    await browser.pause(5000)
    await (await browser.$('#content td.bc-support.bc-browser-firefox_android span.bc-version-label')).moveTo()
    await browser.pause(5000)
  });
});




