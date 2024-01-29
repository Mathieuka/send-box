type Jobs = { deadline: number; payment: number }[];

export function optimalFreelancing(jobs: Jobs) {
    let count = 0;
    const days = Array.from({ length: 7 }).fill(false) as boolean[];
    let total = 0;
    const jobsByPayment = jobs.sort((a, b) => b.payment - a.payment);

    for (let i = 0; i < jobsByPayment.length; i += 1) {
        count += 1;
        const slotIsEmpty = !days[jobsByPayment[i]?.deadline - 1];

        // we set the slot to true with the best payment is the slot is free
        if (slotIsEmpty) {
            if (jobsByPayment[i].deadline < 8) {
                total += jobsByPayment[i].payment;
                days[jobsByPayment[i].deadline - 1] = true;
            }
        }

        if (!slotIsEmpty) {
            // if the current slot is already uses, we check iteratively the previous slot
            let index = jobsByPayment[i]?.deadline - 1;

            while (index >= 0) {
                count += 1;
                if (!days[index]) {
                    total += jobsByPayment[i].payment;
                    days[index] = true;
                    index = 0;
                }
                index -= 1;
            }
        }
    }

    const jobWithDeadLineGreaterThan7Days = jobsByPayment.filter(
        (job) => job.deadline > 7
    );

    for (let i = 0; i < days.length; i += 1) {
        count += 1;
        if (!days[i] && jobWithDeadLineGreaterThan7Days[0]) {
            total += jobWithDeadLineGreaterThan7Days[0].payment;
            jobWithDeadLineGreaterThan7Days.shift();
            days[i] = true;
        }
    }
    console.log('%c LOG count', 'background: #222; color: #bada55', count);
    return total;
}
