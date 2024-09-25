export default function copyToClipboard(value){
    navigator.clipboard.writeText(value)
    alert(`Copied ${value} to clipboard!`)
}