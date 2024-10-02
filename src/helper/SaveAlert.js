import Swal from "sweetalert2";
export async function SaveAlert(message = null) {
   let Result= await Swal.fire({
        title: message || 'Do You Want to Save?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#236b3d',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirm',
        allowOutsideClick: () => false
    })
    return Result.isConfirmed;
}
export async function SuccessAlert() {
    let Result= await Swal.fire({
        title: 'Trade File uploaded successfully',
        icon: 'success',
        confirmButtonColor: '#236b3d',
        confirmButtonText: 'Ok',
        allowOutsideClick: () => false
    })
    return Result.isConfirmed;
}
export async function ApproveAlert(message) {
    let Result= await Swal.fire({
        title: message || 'Do You Want to Approve?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#236b3d',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirm',
        allowOutsideClick: () => false
    })
    return Result.isConfirmed;
}
export async function DeclineAlert(message) {
    let Result= await Swal.fire({
        title: message || 'Do You Want to Decline?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#236b3d',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirm',
        allowOutsideClick: () => false
    })
    return Result.isConfirmed;
}
export async function TradeFileUploadAlert() {
    let Result= await Swal.fire({
        title: 'Looks Like You are uploading wrong file, Still want to upload?',
        icon: 'warning',
        showCancelButton: true,
        cancelButtonColor: '#d33',
        confirmButtonColor: '#236b3d',
        confirmButtonText: 'Yes',
        allowOutsideClick: () => false
    })
    return Result.isConfirmed;
}
export async function BuySellDeleteAlert() {
    let Result = await Swal.fire({
        title: 'Please check disallowed instruments, still want to delete?',
        icon: 'warning',
        showCancelButton: true,
        cancelButtonColor: '#d33',
        confirmButtonColor: '#236b3d',
        confirmButtonText: 'Yes',
        allowOutsideClick: () => false
    })
    return Result.isConfirmed;
}
export async function ErrorAlert(message) {
    let Result= await Swal.fire({
        title: "Information",
        text: message,
        icon: 'warning',
        showConfirmButton: false,
        showCancelButton: true,
        cancelButtonText: 'Close',
        cancelButtonColor: '#ff4a4a',
        width: 800,
        allowOutsideClick: () => false
    })
    return Result.isConfirmed;
}
export async function AfterSaveActionAlert(message="Save Successful!", btn1Name="New", btn2Name="List") {
    let Result= await Swal.fire({
        title: message,
        icon: 'success',
        showCancelButton: true,
        confirmButtonColor: '#236b3d',
        cancelButtonColor: '#626262',
        confirmButtonText: btn1Name,
        cancelButtonText: btn2Name,
        allowOutsideClick: () => false
    })
    return Result.isConfirmed;
}
export async function ErrorAlertWithBtn(message="Error Found!", btn1Name="Ok", btn2Name="Close") {
    let Result= await Swal.fire({
        title: message,
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#236b3d',
        cancelButtonColor: '#626262',
        confirmButtonText: btn1Name,
        cancelButtonText: btn2Name,
        allowOutsideClick: () => false
    })
    return Result.isConfirmed;
}