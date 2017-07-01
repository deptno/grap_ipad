const axios = require('axios');

(async (count = 0) => {
    function infinite() {
        return new Promise(resolve => {
            setTimeout(async () => {
                const response = await axios.get('https://www.apple.com/kr/shop/updateSummary?node=home/shop_ipad/family/ipad_pro&step=select&option.dimensionScreensize=12_9inch&option.dimensionColor=space_gray&option.dimensionCapacity=64gb&option.dimensionConnection=wificell&option.part=IPADPRO_12_9_4G&product=MQED2KH%2FA')
                resolve(response.data.body.response.summarySection.summary.isBuyable);
            }, 1000 * 60 * 30);
        })
    }

    while (!await infinite()) {
                console.log('.')
                    if (++count > 750) {

axios.post(
            'https://hooks.slack.com/services/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',
            JSON.stringify({
                channel: '#general',
                username: '봉부하',
                icon_url: 'https://store.storeimages.cdn-apple.com/8750/as-images.apple.com/is/image/AppleInc/aos/published/images/i/pa/ipad/pro/ipad-pro-12in-cell-select-spacegray-201706_GEO_KR?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1495917875387',
                text: '출시안하나봄'
            })
            )
                        process.exit(1);
                    }
    }

    axios.post(
            'https://hooks.slack.com/services/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',
            JSON.stringify({
                channel: '#general',
                username: '봉부하',
                icon_url: 'https://store.storeimages.cdn-apple.com/8750/as-images.apple.com/is/image/AppleInc/aos/published/images/i/pa/ipad/pro/ipad-pro-12in-cell-select-spacegray-201706_GEO_KR?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1495917875387',
                text: '<https://www.apple.com/kr/shop/buy-ipad/ipad-pro/12.9%ED%98%95-%EB%94%94%EC%8A%A4%ED%94%8C%EB%A0%88%EC%9D%B4-64gb-%EC%8A%A4%ED%8E%98%EC%9D%B4%EC%8A%A4-%EA%B7%B8%EB%A0%88%EC%9D%B4-wifi-cellular|아이패드 프로 출시>'
            })
            )
    console.log('ok')
})()


