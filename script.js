document.getElementById('btn').addEventListener('click', function() {
    const link = document.createElement('a');
    link.download = 'MyResume.pdf';
    link.href = 'assest/MyResume.pdf';
    link.click();
});