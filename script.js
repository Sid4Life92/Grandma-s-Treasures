const galleryItems = [
    {
        image: 'photos/Dishes/A/a1.jpg',
        title: 'A. ΣΕΤ ΦΤΕΡΑ ΓΚΡΙ',
        description: '6 ΜΙΚΡΑ, 12 ΡΗΧΑ, 7 ΒΑΘΙΑ',
        price: 20,
        availability: 'Διαθέσιμο',
        images: ['photos/Dishes/A/a1.jpg', 'photos/Dishes/A/a2.jpg', 'photos/Dishes/A/a3.jpg', 'photos/Dishes/A/a4.jpg']
    },
    {
        image: 'photos/Dishes/B/b1.jpg',
        title: 'B. ΣΕΤ ΠΙΑΤΕΛΕΣ ΚΑΦΕ',
        description: '12 ΠΙΑΤΕΛΕΣ ΡΗΧΕΣ',
        price: 10,
        availability: 'Διαθέσιμο',
        images: ['photos/Dishes/B/b1.jpg', 'photos/Dishes/B/b2.jpg']
    },
    {
        image: 'photos/Dishes/C/c1.jpg',
        title: 'C. ΣΕΤ ΣΧΕΔΙΑ ΜΠΛΕ',
        description: '5 ΜΙΚΡΑ, 6 ΒΑΘΙΑ',
        price: 9,
        availability: 'Διαθέσιμο',
        images: ['photos/Dishes/C/c1.jpg', 'photos/Dishes/C/c2.jpg']
    },
    {
        image: 'photos/Dishes/D/d1.jpg',
        title: 'D. ΣΕΤ ΜΕ ΛΟΥΛΟΥΔΙΑ ΜΠΕΖ',
        description: '1 ΠΙΑΤΕΛΑ, 9 ΒΑΘΙΑ, 8 ΜΙΚΡΑ, 6 ΡΗΧΑ',
        price: 18,
        availability: 'Διαθέσιμο',
        images: ['photos/Dishes/D/d1.jpg', 'photos/Dishes/D/d2.jpg', 'photos/Dishes/D/d3.jpg']
    },
    {
        image: 'photos/Dishes/E/e1.jpg',
        title: 'E. ΣΕΤ ΜΕ ΛΟΥΛΟΥΔΙΑ ΛΕΥΚΑ',
        description: '6 ΡΗΧΑ, 6 ΒΑΘΙΑ, 6 ΜΙΚΡΑ',
        price: 15,
        availability: 'Μη Διαθέσιμο',
        images: ['photos/Dishes/E/e1.jpg', 'photos/Dishes/E/e2.jpg', 'photos/Dishes/E/e3.jpg', 'photos/Dishes/E/e4.jpg', 'photos/Dishes/E/e5.jpg', 'photos/Dishes/E/e6.jpg']
    },
    {
        image: 'photos/Dishes/F/f1.jpg',
        title: 'F. ΣΕΤ ΜΕ ΦΘΙΝΟΠΩΡΙΝΑ ΦΥΛΛΑ',
        description: '5 ΒΑΘΙΑ, 1 ΜΙΚΡΟ ΓΙΑ ΑΛΟΙΦΕΣ, 9 ΡΗΧΑ ΜΙΚΡΑ, 1 ΡΗΧΟ ΜΕΓΑΛΟ',
        price: 15,
        availability: 'Διαθέσιμο',
        images: ['photos/Dishes/F/f1.jpg', 'photos/Dishes/F/f2.jpg', 'photos/Dishes/F/f3.jpg']
    },
    {
        image: 'photos/Dishes/G/g1.jpg',
        title: 'G. ΣΕΤ ΛΕΥΚΑ ΜΕ ΜΠΛΕ ΧΡΩΜΑ',
        description: '3 ΡΗΧΑ, 4 ΒΑΘΙΑ',
        price: 8,
        availability: 'Διαθέσιμο',
        images: ['photos/Dishes/G/g1.jpg', 'photos/Dishes/G/g2.jpg', 'photos/Dishes/G/g3.jpg']
    },
    {
        image: 'photos/Dishes/H/h1.jpg',
        title: 'H. ΣΕΤ ΜΕ ΜΠΛΕ ΣΚΟΥΡΕΣ ΑΛΥΣΙΔΕΣ',
        description: '2 ΒΑΘΙΑ, 3 ΡΗΧΑ, 2 ΠΟΛΥ ΒΑΘΙΑ',
        price: 8,
        availability: 'Διαθέσιμο',
        images: ['photos/Dishes/H/h1.jpg', 'photos/Dishes/H/h2.jpg', 'photos/Dishes/H/h3.jpg', 'photos/Dishes/H/h4.jpg']
    },
    {
        image: 'photos/Dishes/I/i1.jpg',
        title: 'I. ΣΕΤ ΠΟΛΥΧΡΩΜΑ ΛΟΥΛΟΥΔΙΑ',
        description: '6 ΡΗΧΑ, 1 ΣΑΛΑΤΙΕΡΑ, 1 ΠΙΑΤΕΛΑ',
        price: 7,
        availability: 'Διαθέσιμο',
        images: ['photos/Dishes/I/i1.jpg', 'photos/Dishes/I/i2.jpg', 'photos/Dishes/I/i3.jpg', 'photos/Dishes/I/i4.jpg']
    },
    {
        image: 'photos/Dishes/J/j1.jpg',
        title: 'J. ΣΕΤ ΜΕ ΠΡΑΣΙΝΕΣ ΓΡΑΜΜΕΣ',
        description: '2 ΜΙΚΡΑ, 2 ΡΗΧΑ, 2 ΒΑΘΙΑ',
        price: 8,
        availability: 'Διαθέσιμο',
        images: ['photos/Dishes/J/j1.jpg', 'photos/Dishes/J/j2.jpg', 'photos/Dishes/J/j3.jpg']
    },
    {
        image: 'photos/Dishes/K/k1.jpg',
        title: 'K. ΣΕΤ ΜΕ ΛΟΥΛΟΥΔΙΑ ΣΚΟΥΡΑ ΜΠΛΕ',
        description: '6 ΠΙΑΤΑΚΙΑ',
        price: 6,
        availability: 'Διαθέσιμο',
        images: ['photos/Dishes/K/k1.jpg', 'photos/Dishes/K/k2.jpg']
    },
    {
        image: 'photos/Dishes/L/l1.jpg',
        title: 'L. ΣΕΤ ΜΕ ΛΟΥΛΟΥΔΙΑ ΚΑΡΟ',
        description: '6 ΜΙΚΡΑ, 1 ΠΙΑΤΕΛΑ',
        price: 6,
        availability: 'Διαθέσιμο',
        images: ['photos/Dishes/L/l1.jpg', 'photos/Dishes/L/l2.jpg', 'photos/Dishes/L/l3.jpg']
    },
    {
        image: 'photos/Dishes/M/m1.jpg',
        title: 'M. ΣΕΤ ΚΙΝΕΖΙΚΟ ΣΧΕΔΙΟ',
        description: '2 ΠΙΑΤΑΚΙΑ',
        price: 8,
        availability: 'Διαθέσιμο',
        images: ['photos/Dishes/M/m1.jpg', 'photos/Dishes/M/m2.jpg', 'photos/Dishes/M/m3.jpg']
    },
    {
        image: 'photos/Dishes/N/n1.jpg',
        title: 'N. ΣΕΤ ΑΡΙΣΤΟΚΡΑΤΗΣ',
        description: '1 ΠΙΑΤΕΛΑ 5 ΜΙΚΡΑ',
        price: 5,
        availability: 'Διαθέσιμο',
        images: ['photos/Dishes/N/n1.jpg', 'photos/Dishes/N/n2.jpg', 'photos/Dishes/N/n3.jpg', 'photos/Dishes/N/n4.jpg']
    },
    {
        image: 'photos/Dishes/O/o1.jpg',
        title: 'O. ΣΕΤ ΓΥΑΛΙΝΑ',
        description: '12 ΓΛΥΚΟΥ, 4 ΠΑΓΩΤΟΥ',
        price: 15,
        availability: 'Διαθέσιμο',
        images: ['photos/Dishes/O/o1.jpg', 'photos/Dishes/O/o2.jpg', 'photos/Dishes/O/o3.jpg', 'photos/Dishes/O/o4.jpg', 'photos/Dishes/O/o5.jpg']
    },
    {
        image: 'photos/Glasses/01/01 (1).jpeg',
        title: '01. ΣΕΤ ΠΟΡΤΟΚΑΛΙ',
        description: '4 ΤΣΑΓΙΟΥ, 5 ΕΛΛΗΝΙΚΟΥ ΚΑΦΕ',
        price: 6,
        availability: 'Μη Διαθέσιμο',
        images: ['photos/Glasses/01/01 (1).jpeg', 'photos/Glasses/01/01 (2).jpeg', 'photos/Glasses/01/01 (3).jpeg']
    },
    {
        image: 'photos/Glasses/02/02 (1).jpeg',
        title: '02. ΣΕΤ ΚΑΡΑΒΙ ΣΑΛΑΜΙΝΑΣ + 2 ΚΑΝΑΤΑΚΙΑ ΤΣΙΠΟΥΡΟΥ',
        description: '1 ΠΑΓΟΥ, 4 ΠΟΤΗΡΙΑ ΤΣΙΠΟΥΡΟΥ, 2 ΚΑΝΑΤΑΚΙΑ ΤΣΙΠΟΥΡΟΥ',
        price: 6,
        availability: 'Διαθέσιμο',
        images: ['photos/Glasses/02/02 (1).jpeg', 'photos/Glasses/02/02 (2).jpeg']
    },
    {
        image: 'photos/Glasses/03/03 (1).jpeg',
        title: '03. ΣΕΤ ΟΥΙΣΚΥ (LUMINARC SPAIN)',
        description: '3 ΜΙΚΡΑ, 3 ΜΕΓΑΛΑ',
        price: 8,
        availability: 'Διαθέσιμο',
        images: ['photos/Glasses/03/03 (1).jpeg', 'photos/Glasses/03/03 (2).jpeg', 'photos/Glasses/03/03 (3).jpeg']
    },
    {
        image: 'photos/Glasses/04/04 (1).jpeg',
        title: '04. ΣΕΤ ΚΟΚΚΙΝΑ ΚΑΡΑΒΙΑ',
        description: '6 ΝΕΡΟΥ',
        price: 5,
        availability: 'Διαθέσιμο',
        images: ['photos/Glasses/04/04 (1).jpeg', 'photos/Glasses/04/04 (2).jpeg']
    },
    {
        image: 'photos/Glasses/05/05 (1).jpeg',
        title: '05. ΣΕΤ ΓΥΑΛΙΝΑ ΠΙΑΤΑΚΙΑ',
        description: '8 ΓΛΥΚΟΥ',
        price: 5,
        availability: 'Διαθέσιμο',
        images: ['photos/Glasses/05/05 (1).jpeg', 'photos/Glasses/05/05 (2).jpeg']
    },
    {
        image: 'photos/Glasses/06/06 (1).jpeg',
        title: '06. ΣΕΤ ΛΟΥΛΟΥΔΙΑ ΜΠΛΕ ΡΟΖ',
        description: '4 ΝΕΡΟΥ',
        price: 5,
        availability: 'Διαθέσιμο',
        images: ['photos/Glasses/06/06 (1).jpeg', 'photos/Glasses/06/06 (2).jpeg']
    },
    {
        image: 'photos/Glasses/07/07 (1).jpeg',
        title: '07. ΣΕΤ ΓΥΑΛΙΝΑ ΠΟΤΗΡΑΚΙΑ',
        description: '6 ΚΟΝΙΑΚ',
        price: 5,
        availability: 'Διαθέσιμο',
        images: ['photos/Glasses/07/07 (1).jpeg', 'photos/Glasses/07/07 (2).jpeg']
    },
    {
        image: 'photos/Glasses/08/08 (1).jpeg',
        title: '08. ΣΕΤ ΣΦΗΝΟΠΟΤΗΡΑ',
        description: '4 ΠΟΤΗΡΙΑ',
        price: 5,
        availability: 'Διαθέσιμο',
        images: ['photos/Glasses/08/08 (1).jpeg', 'photos/Glasses/08/08 (2).jpeg']
    },
    {
        image: 'photos/Glasses/09/09 (1).jpeg',
        title: '09. ΣΕΤ ΦΥΛΛΑ ΚΑΦΕ',
        description: '6 ΦΛΥΤΖΑΝΙΑ, 6 ΠΙΑΤΑΚΙΑ',
        price: 5,
        availability: 'Διαθέσιμο',
        images: ['photos/Glasses/09/09 (1).jpeg', 'photos/Glasses/09/09 (2).jpeg']
    },
    {
        image: 'photos/Glasses/10/10 (1).jpeg',
        title: '10. ΣΕΤ VINTAGE BEAUTY (MADE IN GERMANY)',
        description: '6 ΦΛΥΤΖΑΝΙΑ, 6 ΠΙΑΤΑΚΙΑ',
        price: 8,
        availability: 'Διαθέσιμο',
        images: ['photos/Glasses/10/10 (1).jpeg', 'photos/Glasses/10/10 (2).jpeg']
    },
    {
        image: 'photos/Glasses/11/11 (1).jpeg',
        title: '11. ΣΕΤ ΟΜΠΡΕΛΕΣ ΜΠΛΕ',
        description: '4 ΦΛΥΤΖΑΝΙΑ, 4 ΠΙΑΤΑΚΙΑ',
        price: 5,
        availability: 'Διαθέσιμο',
        images: ['photos/Glasses/11/11 (1).jpeg', 'photos/Glasses/11/11 (2).jpeg']
    },
    {
        image: 'photos/Glasses/12/12 (1).jpeg',
        title: '12. ΣΕΤ ΚΟΥΠΕΣ ΛΟΥΛΟΥΔΙΑ',
        description: '3 ΚΟΥΠΕΣ, 3 ΠΙΑΤΑΚΙΑ',
        price: 5,
        availability: 'Διαθέσιμο',
        images: ['photos/Glasses/12/12 (1).jpeg', 'photos/Glasses/12/12 (2).jpeg']
    },
    {
        image: 'photos/Glasses/13/13 (1).jpeg',
        title: '13. ΣΕΤ ΜΠΛΕ ΜΕ ΛΟΥΛΟΥΔΙΑ',
        description: '6 ΦΛΥΤΖΑΝΙΑ, 6 ΠΙΑΤΑΚΙΑ',
        price: 5,
        availability: 'Διαθέσιμο',
        images: ['photos/Glasses/13/13 (1).jpeg', 'photos/Glasses/13/13 (2).jpeg']
    },
    {
        image: 'photos/Glasses/14/14 (1).jpeg',
        title: "14. ΣΕΤ GRANDMA'S FAVOURITE",
        description: '6 ΦΛΥΤΖΑΝΙΑ, 6 ΠΙΑΤΑΚΙΑ',
        price: 5,
        availability: 'Διαθέσιμο',
        images: ['photos/Glasses/14/14 (1).jpeg', 'photos/Glasses/14/14 (2).jpeg']
    },
    {
        image: 'photos/Glasses/15/15 (1).jpeg',
        title: '15. ΣΕΤ ΣΧΕΔΙΟ ΚΑΦΕ',
        description: '4 ΦΛΥΤΖΑΝΙΑ, 4 ΠΙΑΤΑΚΙΑ',
        price: 5,
        availability: 'Διαθέσιμο',
        images: ['photos/Glasses/15/15 (1).jpeg', 'photos/Glasses/15/15 (2).jpeg']
    }
];

// Function to create a new gallery item
function createGalleryItem(item, containerId, index) {
    const galleryContainer = document.querySelector(`#${containerId}`);
    const galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery-item');

    const image = document.createElement('img');
    image.src = item.image;
    image.dataset.index = index;
    galleryItem.appendChild(image);

    const title = document.createElement('h3');
    title.textContent = item.title;
    galleryItem.appendChild(title);

    const description = document.createElement('p');
    description.textContent = item.description;
    galleryItem.appendChild(description);

    const price = document.createElement('p');
    price.textContent = `Τιμή: €${item.price}`;
    galleryItem.appendChild(price);

    // Availability
const availability = document.createElement('p');
availability.classList.add('availability'); // <-- IMPORTANT

availability.textContent = item.availability;

// Add class based on availability
if (item.availability === 'Διαθέσιμο') {
    availability.classList.add('available');
} else if (item.availability === 'Μη Διαθέσιμο') {
    availability.classList.add('unavailable');
}

galleryItem.appendChild(availability);
galleryContainer.appendChild(galleryItem);
}

// Split items to two sections
galleryItems.slice(0, 15).forEach((item, i) => createGalleryItem(item, 'dishes-gallery', i));
galleryItems.slice(15).forEach((item, i) => createGalleryItem(item, 'cups-gallery', i + 15));

// Function to show carousel
function showCarousel(index) {
    const item = galleryItems[index];
    const carouselContainer = document.querySelector('.carousel-container');
    const carousel = document.querySelector('.carousel');

    carousel.innerHTML = '';
    let currentIndex = 0;

    const img = document.createElement('img');
    img.src = item.images[currentIndex];
    carousel.appendChild(img);

    addCloseButton(carousel);

    document.querySelector('.carousel-next').onclick = () => {
        currentIndex = (currentIndex + 1) % item.images.length;
        img.src = item.images[currentIndex];
    };

    document.querySelector('.carousel-prev').onclick = () => {
        currentIndex = (currentIndex - 1 + item.images.length) % item.images.length;
        img.src = item.images[currentIndex];
    };

    carouselContainer.style.display = 'block';
}

// Add event listeners to each gallery image
document.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG' && e.target.closest('.gallery-item')) {
        const index = e.target.dataset.index;
        if (index !== undefined) {
            showCarousel(Number(index));
        }
    }
});

// Add close button
function addCloseButton(carousel) {
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Κλείσε';
    closeButton.className = 'carousel-close';
    carousel.appendChild(closeButton);
    closeButton.addEventListener('click', () => {
        document.querySelector('.carousel-container').style.display = 'none';
    });
}

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 
