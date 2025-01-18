function hesabla() {
    // Input sahələrindən dəyərləri oxuyuruq
    let ksq1 = Number(document.getElementById("ksq1").value);
    let ksq2 = Number(document.getElementById("ksq2").value);
    let ksq3 = Number(document.getElementById("ksq3").value);
    let bsq = Number(document.getElementById("bsq").value);

    // Hata mesajlarını silirik
    document.getElementById("error-message").innerHTML = "";

    // Əgər bir sahə boşdursa, istifadəçiyə xəbərdarlıq edirik
    if (isNaN(ksq1) || isNaN(ksq2) || isNaN(ksq3) || isNaN(bsq)) {
        document.getElementById("error-message").innerHTML = "Zəhmət olmasa bütün sahələri düzgün doldurun!";
        return;
    }

    // Ortalamanı hesablamaq
    let ortalama = (ksq1 + ksq2 + ksq3) / 3 * 0.4 + (bsq * 0.6);

    // Nəticəni ekranda göstəririk
    document.getElementById("result").innerHTML = `Ortalamanız: ${ortalama.toFixed(2)}`;
}
