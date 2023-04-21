import React from "react"
import { Button } from '@material-ui/core';
import XLSX from "xlsx"
import { saveAs } from "file-saver"

export default function ExportXLSX({ exportData, btnStyle }: { exportData: any[], btnStyle?: any | undefined }): JSX.Element {
    function exportXlsx(): void {
        const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        const ws = XLSX.utils.json_to_sheet(exportData);
        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
        const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
        const data = new Blob([excelBuffer], { type: fileType });
        saveAs(data, "data.xlsx")
    }

    return (
        <Button onClick={() => exportXlsx()} className={btnStyle} color="primary" variant="contained">XLS</Button>
    )
}