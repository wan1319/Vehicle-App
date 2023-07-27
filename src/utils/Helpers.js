const helperDuplicatedInArrayObject = (item, by, array) => {
    if (!Array.isArray(array)) {
        console.error('Invalid array');
        return false;
    }

    let isDuplicate = false;
    for (let obj of array) {
        if (item[by] === obj[by]) {
            isDuplicate = true;
            break; // Optional: Jika Anda ingin menghentikan pencarian setelah menemukan duplikat pertama
        }
    }

    return isDuplicate;
};

const helperReadableCurrency = (num) => {
    let n = parseInt(num).toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
    });
    return n;
};

const helperHandleZero = (name, value, index, values, key) => {
    const result = [...values];
    if (value * result[index][key] <= 0) {
        alert("Jumlah pembelian jangan sampai 0");
    } else {
        result[index].subtotal = value * result[index][key];
        result[index][name] = parseInt(value);
    }

    return result;
};

const helperReadableDate = (date) => {
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    let d = new Date(Date.parse(date));
    return d.toLocaleDateString("id-ID", {
        timeZone: "Asia/Jakarta",
        ...options,
    });
};

export {
    helperReadableCurrency,
    helperDuplicatedInArrayObject,
    helperReadableDate,
    helperHandleZero,
};