function toggleMenu() {
    const menuItems = document.querySelector('.menu-items');
    menuItems.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.kerdoiv');
    //Elemeet elrejtem
    const helyvalaszto = document.getElementById('helyvalaszto').closest('td');
    const nemRadio = document.getElementById('nem'); 
    const igenRadio = document.getElementById('igen');

    function toggleHelyvalaszto() {
        if (nemRadio.checked) {
            helyvalaszto.style.display = 'none'; //hakivalasztva none
        } else {
            helyvalaszto.style.display = '';
        }
    }

    nemRadio.addEventListener('change', toggleHelyvalaszto);  //esemenyfigyelok
    igenRadio.addEventListener('change', toggleHelyvalaszto);
    
    form.addEventListener('submit', function(e) {


        e.preventDefault(); 
        //display none, pl ha nemet valasztok, jobban latsz, pl tunjon el hogy melyik bouldereket ismeri, es helystte legyewn valami mas
        let score = 0;
        
        //Maszotte
        if (document.getElementById('igen').checked) {
            score += 10;
        }
        
        //fekvos
        const pushUps = parseInt(document.getElementById('fekvotamasz').value) || 0;
        if (pushUps > 20) score += 10;  
        else if (pushUps > 10) score += 5;
        else if (pushUps < 10) score -= 5;
        
        //helyszin
        const location = document.getElementById('helyvalaszto').value;
        if (location === "Boulder Academy Budapest") score += 5;
        else if (location === "Flow Boulder") score += 5
        else if (location === "Gravity Boulder") score += 3
        else if (location === "Spider Club") score += 7 
        else if (location === "Mountex Boulder") score += 7        
        
        //zaba
        if (document.getElementById('rantotta').checked) score += 5;
        if (document.getElementById('spenot').checked) score += 500;
        if (document.getElementById('chilis').checked) score += 10000;
        if (document.getElementById('meki').checked) score -= 500000000;
        
        // kel
        const wakeUpTime = document.getElementById('ido').value;
        if (wakeUpTime && wakeUpTime < "07:00") score += 20;
        
        // ev
        const birthDate = new Date(document.getElementById('szul').value);
        const age = new Date().getFullYear() - birthDate.getFullYear();
        if (age >= 18 && age <= 30) score += 50;
        
        // fut
        const runningDistance = parseInt(document.getElementById('futas').value);
        if (runningDistance > 5) score += 10;
        else if (runningDistance > 2) score += 5;
        else if (runningDistance < 2) score -= 1000;
        
        // szint
        let level;
        if (score < 80) level = "Kezdő";
        else if (score < 150) level = "Amatőr";
        else level = "Profi";
        
        // kimenet
        alert(`Az eredményed: ${score} pont, és a szinted pedig: ${level}`);
    });
});