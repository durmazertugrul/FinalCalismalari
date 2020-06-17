var sirasayisi  = function(sayi) {
    var sira = 0;
    while (sayi > 0) {
        if (sayi % 2 == 0) {
            sayi = sayi / 2;
            sira++;
        } else {
            sayi--;
            sira++;
        }
    }
    return sira;
};
