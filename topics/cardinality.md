Cardinality = how many unique values a field has.

High cardinality: many unique values
(Emails, _id, phone numbers)

Low cardinality: few repeating values
(Gender, status = active/inactive)

One-line:
Cardinality = uniqueness count of a field’s values.




✅ Cardinality എന്തെന്ന് ഒരു simple മലയാളം example
Example Collection
[
  { city: "Kochi" },
  { city: "Kochi" },
  { city: "Kochi" },
  { city: "Kottayam" },
  { city: "Kollam" }
]


ഇവിടേ:

city field-inte unique values:

Kochi

Kottayam

Kollam

Total 3 unique values മാത്രം → Low cardinality
(അധിക variety ഇല്ല)

🔥 Another Example (High cardinality)
Example Collection
[
  { email: "a@gmail.com" },
  { email: "b@gmail.com" },
  { email: "c@gmail.com" },
  { email: "d@gmail.com" },
  { email: "e@gmail.com" }
]


ഇവിടെ:

email field-inte unique values:

5 different emails

എല്ലാം വ്യത്യസ്ത

→ High cardinality
(വളരെ വലിയ variety)

⭐ Malayalam Summary

Cardinality = ഒരു field-il ഉള്ള values-inte variety എത്ര und എന്നത്.

Values കുറച്ചു ഉണ്ടെങ്കിൽ → Low cardinality

Values valare adhikam / unique ആണെങ്കിൽ → High cardinality