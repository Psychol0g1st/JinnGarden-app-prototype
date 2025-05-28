# JinnGarden UI/UX Fejlesztési Terv

## Általános Design Alapelvek

A JinnGarden alkalmazás továbbfejlesztése során a következő alapelveket követjük a magas minőségű, reszponzív felhasználói felület kialakításához:

1. **Mobilbarát Megközelítés**: Az alkalmazás elsődlegesen mobileszközökre optimalizált, de adaptív elrendezéssel rendelkezik, amely zökkenőmentesen alkalmazkodik a nagyobb képernyőméretekhez is.

2. **Vizuális Hierarchia**: Egyértelmű vizuális hierarchia kialakítása, amely segíti a felhasználókat a tartalom gyors és intuitív értelmezésében.

3. **Konzisztencia**: Egységes színpaletta, tipográfia és komponensek használata az egész alkalmazásban.

4. **Hozzáférhetőség**: WCAG irányelvek követése a színkontrasztok, betűméretek és interaktív elemek kialakításánál.

5. **Teljesítmény**: Optimalizált képek és hatékony CSS használata a gyors betöltési idő érdekében.

## Színpaletta Továbbfejlesztése

A jelenlegi zöld árnyalatú színpalettát megtartjuk, de kiegészítjük további árnyalatokkal a vizuális mélység növelése érdekében:

- **Elsődleges háttér**: #F7FFF4 (világos zöld árnyalat)
- **Másodlagos háttér**: #F4FFFA (halvány türkiz árnyalat)
- **Elsődleges szöveg**: #274E13 (sötét zöld)
- **Másodlagos szöveg**: #4D6B3A (közép zöld)
- **Kiemelés**: #38A169 (élénk zöld)
- **Kiegészítő kiemelés**: #68D391 (világos élénk zöld)
- **Figyelmeztetés**: #F6AD55 (narancssárga)
- **Hiba**: #F56565 (piros)
- **Semleges**: #E2E8F0 (világos szürke)
- **Semleges sötét**: #718096 (közép szürke)

## Tipográfia

Az Inter betűtípust megtartjuk, de strukturáltabb hierarchiát alakítunk ki:

- **Címsorok**: Inter Bold, nagyobb méretben, kisebb sormagassággal
- **Alcímek**: Inter SemiBold, közepes méretben
- **Törzsszöveg**: Inter Regular, olvasható méretben, optimális sormagassággal
- **Kiemelések**: Inter Medium, a fontos információk kiemelésére
- **Kis szöveg**: Inter Light, másodlagos információkhoz

## Komponensek Továbbfejlesztése

### Kártyák
- Finom árnyékolás hozzáadása a mélységérzet növeléséhez
- Enyhe lekerekített sarkok (12px)
- Hover és aktív állapotok animációval
- Strukturált belső elrendezés konzisztens padding értékekkel

### Gombok
- Elsődleges gombok: Telt zöld háttér, fehér szöveg, enyhe árnyékolás
- Másodlagos gombok: Átlátszó háttér, zöld keret és szöveg
- Ikonos gombok: Körformájú háttér, központosított ikon
- Állapotok: Normál, Hover, Aktív, Letiltott - mindegyik megfelelő vizuális visszajelzéssel
- Tapintásbarát méretezés (minimum 44px magasság)

### Navigáció
- Aktív állapot erősebb vizuális jelzése
- Finom átmeneti animációk az állapotváltásoknál
- Nagyobb érintési területek mobilon
- Rögzített alsó navigáció mobilon, oldalsó navigáció tableten és asztali nézetben

### Űrlapok
- Nagyobb, tapintásbarát beviteli mezők
- Lebegő címkék a jobb helykihasználás érdekében
- Azonnali validáció vizuális visszajelzéssel
- Egyértelmű hibaüzenetek

### Listák és Táblázatok
- Váltakozó háttérszínek a jobb olvashatóság érdekében
- Oszlopfejlécek rögzítése görgetéskor
- Reszponzív viselkedés különböző képernyőméreteken

## Reszponzív Viselkedés

### Mobil (< 640px)
- Egyoszlopos elrendezés
- Teljes szélességű komponensek
- Alsó navigációs sáv
- Optimalizált érintési területek
- Rejtett másodlagos tartalmak, szükség esetén lenyithatók

### Tablet (640px - 1024px)
- Kétoszlopos elrendezés a főbb tartalmi területeken
- Oldalsó navigáció opcionálisan megjeleníthető
- Nagyobb információsűrűség

### Asztali (> 1024px)
- Többoszlopos elrendezés
- Állandó oldalsó navigáció
- Bővített információmegjelenítés
- Fejlett interakciók (hover állapotok, tooltip-ek)

## Animációk és Átmenetek

- Finom átmenetek a színváltozásoknál (0.2s időtartam)
- Enyhe mozgásanimációk a komponensek megjelenésénél
- Visszajelző animációk interakciók során
- Betöltési állapotok animált jelzése

## Képek és Ikonok

- Valódi növényekről készült, optimalizált képek használata
- Egységes ikonrendszer (Heroicons vagy hasonló)
- SVG formátumú ikonok a jobb skálázhatóság érdekében
- Képek lazy loading betöltése a teljesítmény optimalizálásához

## Oldal-specifikus Fejlesztések

### Főoldal (Dashboard)
- Vizuálisan hangsúlyosabb aktív kertek szekció
- Interaktív növényi állapotjelzők
- Időjárás-információk integrálása
- Személyre szabott tippek kiemelése

### Növények Oldal
- Fejlettebb növényi állapotjelzők vizualizációja
- Részletes növekedési grafikonok
- Csempés elrendezés kisebb képernyőkön, táblázatos nagyobb képernyőkön
- Szűrési és rendezési lehetőségek

### Közösségi Oldal
- Fejlettebb bejegyzéskártyák gazdag média támogatással
- Interaktív reakciógombok
- Kommentszekciók egyszerű kibontása/összecsukása
- Tartalom betöltése görgetéskor

### Profil Oldal
- Vizuálisan gazdagabb eredmények megjelenítése
- Animált statisztikai számláló
- Személyre szabható profilbeállítások
- Tevékenységi előzmények idővonalas megjelenítése

### Beállítási Varázsló
- Vizuálisan gazdagabb növény- és méretválasztási lehetőségek
- Interaktív előnézet a kiválasztott opciókról
- Folyamatjelző animációk a lépések között
- Összefoglaló képernyő vizuális kiemelésekkel
