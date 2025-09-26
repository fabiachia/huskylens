basic.forever(function () {
    huskylens.request()
    if (huskylens.isLearned(3)) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.No)
    }
})
