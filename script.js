
document.getElementById('calculate-btn').addEventListener('click', function() {
    const currentTz = document.getElementById('current-timezone').value;
    const destinationTz = document.getElementById('destination-timezone').value;
    const daysAdjustment = parseInt(document.getElementById('adjustment-days').value, 10);
    
    let result = `To adjust from ${currentTz} to ${destinationTz} in ${daysAdjustment} days:\n`;
    
    const currentOffset = parseInt(currentTz.slice(3), 10);
    const destinationOffset = parseInt(destinationTz.slice(3), 10);
    const totalOffset = destinationOffset - currentOffset;

    const adjustmentPerDay = (totalOffset / daysAdjustment).toFixed(2);
    
    for (let i = 0; i < daysAdjustment; i++) {
        result += `Day ${i + 1}: Adjust by ${adjustmentPerDay} hours.\n`;
    }
    
    document.getElementById('schedule-result').innerText = result;
});
