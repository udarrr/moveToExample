describe("Current implementation", () => {
  it("should login with valid credentials", async () => {
    await browser.url(
      "https://blog.logrocket.com/hide-scrollbar-without-impacting-scrolling-css/"
    );
    for (let scrollType of [
      "#cp_embed_abXZRex",
      "#cp_embed_wvNzMdN",
      "#cp_embed_JjxKdgP",
    ]) {
      const elm = await browser.$(scrollType);
      await elm.moveTo();
      //before
      await browser.pause(3000);
      await browser.switchToFrame(elm);
      const resultFrame = await browser.$("#result-iframe");
      await browser.switchToFrame(resultFrame);
      await (
        await browser.$(
          scrollType === "#cp_embed_JjxKdgP"
            ? "body > div > p:nth-child(40)"
            : "body > div > div > p:nth-child(10)"
        )
      ).scrollIntoView();
      //after
      await browser.pause(3000);
      await browser.switchToParentFrame();
      await browser.switchToParentFrame();
    }
  });
});

describe("Just origin", () => {
  it("should login with valid credentials", async () => {
    browser.overwriteCommand(
      "scrollIntoView",
      async function (_origin) {
        await browser
          .action("wheel")
          //@ts-ignore
          .scroll({ origin: this })
          .perform();
      },
      true
    );
    await browser.url(
      "https://blog.logrocket.com/hide-scrollbar-without-impacting-scrolling-css/"
    );
    for (let scrollType of [
      "#cp_embed_abXZRex",
      "#cp_embed_wvNzMdN",
      "#cp_embed_JjxKdgP",
    ]) {
      const elm = await browser.$(scrollType);
      await elm.moveTo();
      //before
      await browser.pause(3000);
      await browser.switchToFrame(elm);
      const resultFrame = await browser.$("#result-iframe");
      await browser.switchToFrame(resultFrame);
      await (
        await browser.$(
          scrollType === "#cp_embed_JjxKdgP"
            ? "body > div > p:nth-child(40)"
            : "body > div > div > p:nth-child(10)"
        )
      ).scrollIntoView();
      //after
      await browser.pause(3000);
      await browser.switchToParentFrame();
      await browser.switchToParentFrame();
    }
  });
});
