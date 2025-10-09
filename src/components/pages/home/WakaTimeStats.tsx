import React from "react";
import ShineBorder from "@/components/ui/shine-border";
import NumberTicker from "@/components/ui/number-ticker";
import { secondsToHours } from "@/utils/secondsToHours";
import { formatDate } from "@/utils/formatDate";

interface WakaTimeStatsProps {
    data?: any;
    loading: boolean;
    error?: string;
}

export default function WakaTimeStats({ data, loading, error }: WakaTimeStatsProps) {
    if (loading) {
        return (
            <div className="flex flex-col gap-3 w-full animate-pulse">
                <div className="h-16 w-full bg-gradient-to-r from-neutral-200 via-neutral-300 to-neutral-200 rounded-xl dark:from-neutral-700 dark:via-neutral-800 dark:to-neutral-700 bg-[length:200%_100%] animate-shimmer" />
                <div className="h-12 w-3/4 bg-gradient-to-r from-neutral-200 via-neutral-300 to-neutral-200 rounded-xl dark:from-neutral-700 dark:via-neutral-800 dark:to-neutral-700 bg-[length:200%_100%] animate-shimmer" />
            </div>
        );
    }

    if (error) return <p className="text-red-500">{error}</p>;
    if (!data) return null;

    return (
        <>
            <a href="https://wakatime.com/@gillyhuga" target="_blank" rel="noopener noreferrer">
                <ShineBorder className="text-1xl font-bold capitalize" color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
                    <p className="whitespace-pre-wrap font-medium tracking-tighter text-black dark:text-white">
                        Total Coding Time: <NumberTicker value={secondsToHours(data.grand_total?.total_seconds)} />+ Hours
                    </p>
                    <p className="text-xs font-light text-black dark:text-white">
                        Since {data.range?.start ? formatDate(data.range.start) : "N/A"}
                    </p>
                </ShineBorder>
            </a>

            <a href="https://wakatime.com/@gillyhuga" target="_blank" rel="noopener noreferrer">
                <ShineBorder className="text-center text-1xl font-bold capitalize" color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
                    <p className="whitespace-pre-wrap font-medium tracking-tighter text-black dark:text-white">
                        Daily Average: <NumberTicker value={secondsToHours(data.grand_total?.daily_average)} />+ Hours/day
                    </p>
                </ShineBorder>
            </a>
        </>
    );
}
