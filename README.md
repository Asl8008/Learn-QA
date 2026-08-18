# Learn-QA — QA testing kursi (o'zbek tilida)

Noldan QA tester bo'lish uchun **25 darslik** amaliy kurs. Har bir dars
kichik, tugallangan va amaliy topshiriq bilan tugaydi. Har bir da'vo
tekshirilgan birlamchi manbaga tayanadi (ISTQB, W3C, MDN, OWASP,
Atlassian, Playwright, Android va boshqalar) — ro'yxat:
[RESOURCES.md](./RESOURCES.md).

> Bu kurs o'zbek tilida yozilgan. QA bo'yicha o'zbekcha ishonchli manba
> deyarli yo'q — shu bo'shliqni to'ldirish uchun tuzilgan.

## Darslarni qanday o'qish

Darslar HTML formatida. **GitHub'da `.html` faylni bosganda kod
ko'rinadi, sahifa emas** — shuning uchun ikki yo'l bor:

1. **GitHub Pages** (tavsiya etiladi) — Settings → Pages → Source: `main` /
   `root` → Save. Bir-ikki daqiqadan keyin darslar
   `https://<foydalanuvchi>.github.io/<repo>/lessons/` manzilida ochiladi.
2. **Lokal** — repozitoriyni yuklab olib, `lessons/index.html` faylini
   brauzerda oching.

Boshlang'ich nuqta: **[lessons/index.html](./lessons/index.html)** — kurs xaritasi.

## Darslar

| № | Dars | Mavzu |
|---|------|-------|
| 1 | Dasturchi qaytarib yubormaydigan bug report | Xatoni takrorlanadigan qilib yozish |
| 2 | Cheksiz variantdan to'rttasini tanlash | Ekvivalentlik sinflari, chegara qiymatlari |
| 3 | Boshqa odam ham bajara oladigan test | Test case yozish |
| 4 | Hisobot yuborildi — endi nima bo'ladi? | Bug hayot sikli, retest, regression |
| 5 | Talab yo'q — nimadan boshlaysiz? | Exploratory testing |
| 6 | Ekranning orqasini ko'rish | DevTools: Console va Network |
| 7 | Talab qayerdan keladi | User story, acceptance criteria |
| 8 | Hisobot qayerda yashaydi | Jira: maydonlar, status, resolution, JQL |
| 9 | Vaqt oz, ish ko'p | Test plan, risk, kirish/chiqish mezonlari |
| 10 | Sizning ishingiz qayerda boshlanadi | Test darajalari va turlari |
| 11 | Ekran aldashi mumkin | SQL testerlar uchun |
| 12 | Tugmasiz test | API testing va Postman |
| 13 | Ilova qurilmaning egasi emas | Mobil testing |
| 14 | Avtomatlashtirish: nima, qachon va qachon emas | Qaror qabul qilish, test piramidasi |
| 15 | Bilim bor — endi uni ko'rsatish kerak | Portfolio, rezyume, suhbat |
| 16 | Eshik yopiqmi yoki shunchaki yopiq ko'rinadimi? | Xavfsizlik asoslari, OWASP Top 10 |
| 17 | Sichqonchasiz o'tib ko'ring | Accessibility, WCAG, POUR |
| 18 | «Sekin» — bu bug report emas | Performance, Core Web Vitals |
| 19 | Birinchi avtomatlashtirilgan testingiz | Playwright |
| 20 | Faqat sizning kompyuteringizda ishlaydigan test — himoya emas | CI/CD, GitHub Actions |
| 21 | Vaqtingiz aslida qayerga ketadi | Test muhitlari va test ma'lumoti |
| 22 | Bizning tilimiz — tayyor test maydoni | Lokalizatsiya, apostrof, ikki alifbo |
| 23 | Ishingiz ko'rinmasa, u bajarilmagan hisoblanadi | Hisobot va metrikalar |
| 24 | AI: kuchli yordamchi, yomon guvoh | AI asboblaridan foydalanish qoidalari |
| 25 | Endi o'qish tugadi | 30 kunlik amaliy reja |

## Reference hujjatlar

Darslar bir marta o'qiladi, bu hujjatlarga qayta-qayta qaytiladi.
Chop etib stol ustida saqlash uchun mo'ljallangan.

`reference/` papkasida: QA lug'ati, bug report va test case shablonlari,
test dizayn texnikalari, exploratory sessiya varaqasi, DevTools / SQL /
API / Jira / Playwright / CI shpargalkalari, xavfsizlik va accessibility
checklistlari, performance va lokalizatsiya jadvallari, hisobot shabloni
va 30 kunlik jadval.

## Mashq maydonlari

- [saucedemo.com](https://www.saucedemo.com/) — ataylab buzuq hisoblari bor demo do'kon
- [the-internet.herokuapp.com](https://the-internet.herokuapp.com/) — qiyin UI holatlari
- [sqlbolt.com](https://sqlbolt.com/) — interaktiv SQL mashqlari
- [jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com/) — bepul test API

## Tuzilma

```
lessons/     25 ta dars + index.html (kurs xaritasi)
reference/   22 ta reference hujjat
assets/      style.css va lesson.js (umumiy dizayn va quizlar)
MISSION.md   kursning maqsadi va qamrovi
RESOURCES.md barcha birlamchi manbalar, izohlar bilan
```

## Litsenziya

Shaxsiy o'quv materiali. Foydalanish erkin.
