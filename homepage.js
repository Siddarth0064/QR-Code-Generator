document.getElementById('generateQR').addEventListener('click', function() {
    // Get user inputs
    const userName = document.getElementById('userName').value;
    const phoneNo = document.getElementById('phoneNo').value;
    const email = document.getElementById('email').value;

    // Validate inputs
    if (userName && phoneNo && email) {
        // Create the data string for the QR code
        const qrData = `UserName: ${userName}, PhoneNo: ${phoneNo}, Email: ${email}`;

        // Clear any existing QR code
        const qrcodeElement = document.getElementById('qrcode');
        qrcodeElement.innerHTML = "";  // Clear previous QR code (if any)

        // Create a new canvas element inside the qrcode div
        const canvas = document.createElement('canvas');
        qrcodeElement.appendChild(canvas);

        // Generate the QR code
        QRCode.toCanvas(canvas, qrData, function (error) {
            if (error) {
                console.error('Error generating QR code:', error);
            } else {
                console.log('QR code generated successfully');
            }
        });
    } else {
        alert('Please fill out all the fields.');
    }
});

