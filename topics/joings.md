Joins = two tables/collections connect ചെയ്ത് related data ഒരുമിച്ച് fetch ചെയ്യുന്നത്.

🔵 What

Join = data combine from two different places based on a matching field.

🟢 Why

Related information ഒരുമിച്ച് വേണം

Avoid multiple queries

Better readability

Complete combined output

🟣 When

User + Orders data വേണം

Product + Category combine ചെയ്യണം

Parent + Child data fetch ചെയ്യുമ്പോൾ

Reporting, analytics, dashboards

🟠 Where

SQL databases (MySQL, PostgreSQL) have native JOIN

MongoDB-ൽ $lookup ഉപയോഗിക്കുന്നു (join-like behavior)

🔥 How

Join = match records using a common key:

users.id  ==  orders.user_id


SQL-ലും MongoDB $lookup-ലും ഇതേ concept.

🧩 Different Types of Joins (short)
1) INNER JOIN

Only matching rows return ചെയ്യുന്നു.

2) LEFT JOIN

Left table മുഴുവനും + matching right data.

3) RIGHT JOIN

Right table മുഴുവനും + matching left data.

4) FULL OUTER JOIN

Left + Right — all data, matched + unmatched.

5) CROSS JOIN

Every row × Every row (cartesian)











No — SQL and MongoDB do NOT have the same join types.

✅ SQL — Full Join Support

SQL databases have all join types:

INNER JOIN

LEFT JOIN

RIGHT JOIN

FULL OUTER JOIN

CROSS JOIN

SELF JOIN

SQL = relational → joins core feature.

✅ MongoDB — Limited Join Support

MongoDB doesn’t have true SQL joins.
MongoDB only has:

$lookup (LEFT OUTER JOIN only)

That’s it.

MongoDB = NoSQL → document-based → joins minimal.

⭐ One-line Summary

SQL → many join types.
MongoDB → only one join-like operator ($lookup).