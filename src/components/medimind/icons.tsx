import Svg, { Circle, Path, Rect } from 'react-native-svg';

type IconProps = {
  size?: number;
  color?: string;
  strokeWidth?: number;
};

const base = (strokeWidth = 2.75) => ({
  fill: 'none',
  strokeWidth,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
});

export function HeartPulseIcon({ size = 24, color = '#000', strokeWidth }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" stroke={color} {...base(strokeWidth)}>
      <Path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" />
      <Path d="M3.5 12h4l1.5-2.5 2 4 1.5-3 1.2 1.5h4.8" />
    </Svg>
  );
}

export function UploadIcon({ size = 24, color = '#000', strokeWidth }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" stroke={color} {...base(strokeWidth)}>
      <Path d="M12 3v12" />
      <Path d="m17 8-5-5-5 5" />
      <Path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    </Svg>
  );
}

export function DoctorMatchIcon({ size = 24, color = '#000', strokeWidth }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" stroke={color} {...base(strokeWidth)}>
      <Circle cx={12} cy={8} r={4} />
      <Path d="M20 21a8 8 0 0 0-16 0" />
      <Path d="m21 4-2 2-1-1" />
    </Svg>
  );
}

export function ChevronLeftIcon({ size = 24, color = '#000', strokeWidth }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" stroke={color} {...base(strokeWidth)}>
      <Path d="m15 18-6-6 6-6" />
    </Svg>
  );
}

export function ChevronRightIcon({ size = 24, color = '#000', strokeWidth }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" stroke={color} {...base(strokeWidth)}>
      <Path d="m9 18 6-6-6-6" />
    </Svg>
  );
}

export function BellIcon({ size = 24, color = '#000', strokeWidth }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" stroke={color} {...base(strokeWidth)}>
      <Path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <Path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </Svg>
  );
}

export function FileTextIcon({ size = 24, color = '#000', strokeWidth }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" stroke={color} {...base(strokeWidth)}>
      <Path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <Path d="M14 2v6h6" />
    </Svg>
  );
}

export function XIcon({ size = 24, color = '#000', strokeWidth }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" stroke={color} {...base(strokeWidth)}>
      <Path d="M18 6 6 18" />
      <Path d="M6 6l12 12" />
    </Svg>
  );
}

export function CheckCircleIcon({ size = 24, color = '#000', strokeWidth }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" stroke={color} {...base(strokeWidth)}>
      <Path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <Path d="M22 4 12 14.01l-3-3" />
    </Svg>
  );
}

export function StarIcon({ size = 24, color = '#000' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke="none">
      <Path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </Svg>
  );
}

export function StethoscopeIcon({ size = 24, color = '#000', strokeWidth }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" stroke={color} {...base(strokeWidth)}>
      <Rect x={2} y={7} width={20} height={14} rx={2} />
      <Path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </Svg>
  );
}

export function PhoneIcon({ size = 24, color = '#000', strokeWidth }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" stroke={color} {...base(strokeWidth)}>
      <Path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </Svg>
  );
}

export function VideoCallIcon({ size = 24, color = '#000', strokeWidth }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" stroke={color} {...base(strokeWidth)}>
      <Path d="m23 7-7 5 7 5V7z" />
      <Rect x={1} y={5} width={15} height={14} rx={2} />
    </Svg>
  );
}

export function MessageCircleIcon({ size = 24, color = '#000', strokeWidth }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" stroke={color} {...base(strokeWidth)}>
      <Path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </Svg>
  );
}

export function SendIcon({ size = 24, color = '#000', strokeWidth }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" stroke={color} {...base(strokeWidth)}>
      <Path d="m22 2-7 20-4-9-9-4Z" />
      <Path d="M22 2 11 13" />
    </Svg>
  );
}

export function SearchIcon({ size = 24, color = '#000', strokeWidth }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" stroke={color} {...base(strokeWidth)}>
      <Circle cx={11} cy={11} r={8} />
      <Path d="m21 21-4.3-4.3" />
    </Svg>
  );
}

export function CalendarIcon({ size = 24, color = '#000', strokeWidth }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" stroke={color} {...base(strokeWidth)}>
      <Rect x={3} y={4} width={18} height={18} rx={2} />
      <Path d="M16 2v4M8 2v4M3 10h18" />
    </Svg>
  );
}

export function ClockIcon({ size = 24, color = '#000', strokeWidth }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" stroke={color} {...base(strokeWidth)}>
      <Circle cx={12} cy={12} r={10} />
      <Path d="M12 6v6l4 2" />
    </Svg>
  );
}

export function HomeIcon({ size = 24, color = '#000', strokeWidth }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" stroke={color} {...base(strokeWidth)}>
      <Path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    </Svg>
  );
}

export function UserIcon({ size = 24, color = '#000', strokeWidth }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" stroke={color} {...base(strokeWidth)}>
      <Circle cx={12} cy={8} r={4} />
      <Path d="M20 21a8 8 0 0 0-16 0" />
    </Svg>
  );
}
