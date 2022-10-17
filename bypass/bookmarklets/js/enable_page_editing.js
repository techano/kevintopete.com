function confirmbox() {
    if (confirm("This script is only meant to be used for reporting purposes to Gilbert Public Schools, not for student use. Click OK to continue running script. This will work on any site.")) {
        javascript:document.body.contentEditable = 'true'; document.designMode='on'; void 0
        window.alert("Script has been run. Click anywhere to edit text");
    } else {
        window.alert("Script Terminated");
    }
}

confirmbox()