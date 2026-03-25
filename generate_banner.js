import puppeteer from 'puppeteer-core';

(async () => {
    console.log('Initiating Headless Rendering Engine...');
    try {
        const browser = await puppeteer.launch({
            executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
            headless: true, // "new" headless is the default in newer puppeteer, 'true' uses the new implementation
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });

        const page = await browser.newPage();
        console.log('Engine Active. Configuring viewport for 2X Retina Layout...');
        
        // Exact physical viewport dimensions plus retina scaling map
        await page.setViewport({ 
            width: 1584, 
            height: 396, 
            deviceScaleFactor: 2 
        });

        console.log('Fetching Operzy DOM layout and blocking until all Google Web Fonts resolve...');
        
        // waitUntil networkidle0 ensures that ALL custom fonts, graphics, SVGs resolve perfectly before snapshot
        await page.goto('file://C:/Users/mamra/New%20Operzy%20Site/linkedin-banner-ai.html', { 
            waitUntil: 'networkidle0',
            timeout: 10000 
        });

        console.log('Layout locked. Snapping perfect 1-to-1 UI block...');
        const bannerElement = await page.$('#banner');
        
        await bannerElement.screenshot({ 
            path: 'OPERZY-FLAWLESS-BANNER.png'
        });

        console.log('Screenshot Export Successful! Closing engine.');
        await browser.close();

    } catch (e) {
        console.error('CRITICAL RENDER ERROR: ', e);
        process.exit(1);
    }
})();
