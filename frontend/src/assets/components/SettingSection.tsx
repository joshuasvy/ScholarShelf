import React, { type ReactNode } from "react";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

function SettingSection({ title, children }: SectionProps) {
  return (
    <div className="mt-4 md:mt-8">
      <div className="flex flex-row items-center gap-4 md:gap-8 mb-4">
        <h1 className="font-inter font-bold text-xl md:text-2xl">{title}</h1>
        <div className="w-[40%] md:w-[50%] lg:w-[70%] h-0.5 bg-placeholder"></div>
      </div>
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );
}

interface SectionRowProps {
  label: string;
  data?: string | number;
  action?: ReactNode;
}

function SectionRow({ label, data, action }: SectionRowProps) {
  return (
    <div className="flex items-center justify-between px-8 md:px-16 lg:px-26">
      <p className="font-inter text-md md:text-lg font-medium">
        {label}: <span className="font-normal">{data}</span>
      </p>
      {action}
    </div>
  );
}

SettingSection.Row = SectionRow;

export default SettingSection;
