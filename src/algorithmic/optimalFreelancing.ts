type Jobs = { deadline: number; payment: number }[];

export function optimalFreelancing(jobs: Jobs) {
    const days = Array.from({ length: 7 }).fill(false) as boolean[];
    let total = 0;
    const jobsByPayment = jobs.sort((a, b) => b.payment - a.payment);

    for (let i = 0; i < 7; i += 1) {
        // we set the slot to true with the best payment is the slot is free
        if (
            !days[jobsByPayment[i]?.deadline - 1] &&
            jobsByPayment[i]?.payment
        ) {
            if (jobsByPayment[i].deadline < 8) {
                total += jobsByPayment[i].payment;
                days[jobsByPayment[i].deadline - 1] = true;
            }
        } else {
            // if the current slot is already uses, we check iteratively the previous slot
            let index = jobsByPayment[i]?.deadline - 1 || 0;

            const j = jobsByPayment[i];

            while (index >= 0) {
                if (!days[index] && j?.payment) {
                    total += j.payment;
                    days[index] = true;
                    index = -1;
                }

                index -= 1;
            }
        }
    }

    const jobWithDeadLineGreaterThan7Days = jobsByPayment
        .filter((job) => job.deadline > 7)
        .sort((a, b) => b.payment - a.payment);

    let index = 0;
    for (let i = 0; i < days.length; i += 1) {
        if (!days[i]) {
            if (jobWithDeadLineGreaterThan7Days[index]) {
                total += jobWithDeadLineGreaterThan7Days[index].payment;
                days[i] = true;
                index += 1;
            }
        }
    }

    return total;
}
