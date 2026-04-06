# Umbraco CMS – Opsætning og erfaring

## Hvad er Umbraco?

Umbraco er et CMS (Content Management System) bygget på .NET. Det bruges ofte til større og mere fleksible webprojekter, hvor der er behov for mere kontrol og tilpasning end i f.eks. WordPress.

---

## Installation

For at installere Umbraco blev følgende gjort:

1. Installerede .NET SDK  
2. Oprettede et nyt Umbraco projekt med:

   dotnet new umbraco

3. Konfigurerede projektet til at bruge en database  
4. Opsatte en database via Docker (SQL Server)  
5. Startede projektet med:

   dotnet run

---

## Hvordan fungerer Umbraco?

Umbraco arbejder med følgende struktur:

- Content nodes (indhold)
- Document types (struktur for indhold)
- Templates (visning)
- Backoffice (administrationspanel)

Indhold oprettes i backoffice og vises via templates.

---

## Erfaring

Det var mere komplekst at arbejde med Umbraco sammenlignet med WordPress. Det kræver mere opsætning og teknisk forståelse, især fordi det er baseret på .NET.

Til gengæld giver Umbraco større fleksibilitet og er velegnet til større og mere avancerede løsninger.

---

## Sammenligning med WordPress

| Funktion        | WordPress        | Umbraco            |
|-----------------|------------------|--------------------|
| Brugervenlighed | Nem              | Mere kompleks      |
| Opsætning       | Hurtig           | Kræver opsætning   |
| Fleksibilitet   | Middel           | Høj                |
| Teknologi       | PHP              | .NET               |

---

## Konklusion

Umbraco er et kraftfuldt CMS, der egner sig til mere avancerede projekter, mens WordPress er bedre til hurtige og simple løsninger.