<!DOCTYPE html>
<html>
<head>
    <title>Currency Converter</title>
</head>
<body>

<h2>Currency Converter</h2>

<input type="number" id="amount" value="100">

<select id="from">
    <option value="USD">USD</option>
    <option value="INR">INR</option>
    <option value="EUR">EUR</option>
</select>

<select id="to">
    <option value="INR">INR</option>
    <option value="USD">USD</option>
    <option value="EUR">EUR</option>
</select>

<button onclick="convert()">Convert</button>

<h3 id="result"></h3>

<script src="script.js"></script>

</body>
</html>