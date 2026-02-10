// Computing the area of a triangle
function compute_area() {
    let base = Number(document.getElementById('base').value);
    let height = Number(document.getElementById('height').value);
    let area = (base * height) / 2;
    
    document.getElementById('output').innerHTML = 'The area of the triangle is ' + area;
}