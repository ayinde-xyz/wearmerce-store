"use client";

import { formatter } from "@/lib/utils";
import { useEffect, useState } from "react";
// import { Decimal } from "@prisma/client/runtime/library";

interface CurrencyProps {
	value?: string | number | any;
}

const Currency: React.FC<CurrencyProps> = ({ value = 0 }) => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) return null;
	return <p className="font-semibold">{formatter.format(Number(value))}</p>;
};

export default Currency;
