
    const generateBtn = document.getElementById('generate');
    const invoiceForm = document.getElementById('invoiceForm');
    const invoiceSection = document.getElementById('invoiceSection');
    const invoiceContent = document.getElementById('invoiceContent');
    const showFormBtn = document.getElementById('showFormBtn');
    const Header = document.getElementById('intro')

    const generateInvoice = () => {
        const clientName = document.getElementById('clientName').value;
        const price = document.getElementById('price').value
        const quantity = document.getElementById('quantity').value
        const description = document.getElementById('description').value
        const invoiceDate = document.getElementById('invoiceDate').value;
        const invNumber = document.getElementById('invNumber')
        let genenumber = (Math.random() * 10000).toFixed(0)
        const invoiceNumber = `Invoice # : ${clientName}${genenumber}`
        const total = Number(price) * Number(quantity)

        // Display invoice section
        invoiceSection.classList.remove('hidden');

        // Generate and display HTML invoice
        invoiceContent.innerHTML = `
            <p><strong>Client Name:</strong> ${clientName}</p>
            <p><strong>Price:</strong> ${price}₦</p>
            <p><strong>Quantity:</strong> ${quantity} pcs</p>
            <p><strong>Description:</strong> ${description}</p><hr>
            <p><strong>Grand Total:</strong> ${total}₦</p>
            <p><strong>Invoice Date:</strong> ${invoiceDate}</p>
            <!-- Add more HTML content for items, quantity, rate, etc. -->
        `;

        // Hide entry fields section
        invoiceForm.classList.add('hidden');
        Header.classList.add('hidden')
        invNumber.innerHTML = invoiceNumber
    }

    const showForm = () => {
        // Hide invoice section
        invoiceSection.classList.add('hidden');
        
        // Display entry fields section
        invoiceForm.classList.remove('hidden');
    }

    generateBtn.addEventListener('click', generateInvoice);
    showFormBtn.addEventListener('click', showForm);
