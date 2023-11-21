### Bitexen Code Challenge

### How to run test cases?

- Firstly You Must Run : `npm init` and `npm install cypress --save-dev` ,
- Cypress Feature : `npx cypress open ` or `npx cypress run`
- API Project : `yarn run api:test`

### Test Case Link

`<link>` : <https://docs.google.com/spreadsheets/d/1cI1JHNYotnOqqN0wfhsf6cgJy21feX7apvmZyxZbuyE/edit?usp=sharing>

### Bug Reporting

-Kulanıcı login olur. "https://www.bitexen.com/advanced" sayfasında sayfanın sağ alt tarafında "Emirler" alanında "Alarm Ekle" butonuna tıklar. Açılan pop-up da bar aslında -40% tarafından 0% ' a gelmiş gibi bir izlenim yaratıyor. Ve sağ tarafa kaydırdıkça 0%'den değil -40%'den geliyor gibi davranış gösteriyor. Bu durumun 0% alanında sağ ve sol tarafların boş göründüğü ve sağ-sol yönlü hareketlerde 0%'den istenilen yüzdelik kısma hareket ettiğinin görülmesi gerekir.

-Search alanlarında trim yok kullanıcı space'e bastı ve coin arattığında o kriptoyu listede görememektedir. Trim işlemi search inputlarında uygulanabilir.

### Bonus

Search alanı aratılan kelimeyi içerip içermemesine göre listeliyor. "KISA KOD" ve "ADI" alanları içinde arama yapıyor. Mesela "ad" yazdığım zaman bu iki harfin yanyana olduğu "KISA KOD" ve ya "ADI" altındaki tüm coinler listelenmektedir.
