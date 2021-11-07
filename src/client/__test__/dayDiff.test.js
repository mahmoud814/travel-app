const { dayDiffrence } = require('../js/dayDiff');

test('check for day difference at client side', () => {

    expect(dayDiffrence('2020-01-01', '2020-01-31')).toBe(30);
    expect(dayDiffrence('2020-01-01', '2020-01-31')).not.toBe(31);

});