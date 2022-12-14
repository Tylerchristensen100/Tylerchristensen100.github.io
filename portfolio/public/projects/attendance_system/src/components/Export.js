

function Export({list}) {

    function exportJSON() {
        let dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(list));
        let downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href",     dataStr);
        downloadAnchorNode.setAttribute("download", "data.json");
        document.body.appendChild(downloadAnchorNode); // required for firefox
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    }

    function exportCSV() {
        let headers = Object.keys(list[0]);
        var replacer = function(key, value) { return value === null ? '' : value }
        let csv = list.map((row) => {
            return headers.map((fieldName) => {
                return JSON.stringify(row[fieldName], replacer)
            }).join(',')
        })
        csv.unshift(headers.join(',')) // add header column
        csv = csv.join('\r\n');
        console.log(csv)

        let downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href",     csv);
        downloadAnchorNode.setAttribute("download", "data.csv");
        document.body.appendChild(downloadAnchorNode); // required for firefox
        downloadAnchorNode.click();
        // downloadAnchorNode.remove();
    }
    

    return(
        <>
            <h3>Export</h3>
            <button onClick={() => exportJSON()} className="btn btn-primary mt-3">Export JSON</button>
            <br />
            <button onClick={() => exportCSV()} className="btn btn-primary mt-3">Export CSV</button>
        </>
    );
}
export default Export;