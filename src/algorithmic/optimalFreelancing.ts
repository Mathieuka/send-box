type Jobs = { deadline: number; payment: number }[];

export function optimalFreelancing(jobs: Jobs) {
    const days = Array.from({ length: 7 }).fill(false) as boolean[];
    let total = 0;
    const jobsByPayment = jobs.sort((a, b) => b.payment - a.payment);

    for (let i = 0; i < 7; i += 1) {
        if (
            !days[jobsByPayment[i]?.deadline - 1] &&
            jobsByPayment[i]?.payment
        ) {
            total += jobsByPayment[i].payment;
            days[jobsByPayment[i].deadline - 1] = true;
        } else {
            // on verifie les index precedent et

            let index = i - 1;

            const j = jobsByPayment[i];

            while (index >= 0) {
                if (!days[index]) {
                    if (j?.payment) {
                        total += j.payment;
                        days[index] = true;
                    }
                    index = 0;
                }
                index -= 1;
            }
        }
    }

    console.log('%c LOG days', 'background: #222; color: #bada55', days);
    return total;
}
