import type { Snippet } from 'svelte';
import type { HTMLAttributes, HTMLButtonAttributes, HTMLInputAttributes, HTMLTextareaAttributes } from 'svelte/elements';

export type Props<T = object> = {
  [K in keyof T]: T[K];
} & HTMLAttributes<HTMLElement>;

export type ButtonProps = {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  as?: string;
  children?: Snippet;
} & HTMLButtonAttributes;

export type InputProps = {
  type?: HTMLInputAttributes['type'];
} & HTMLInputAttributes;

export type TextareaProps = HTMLTextareaAttributes;

export type BadgeProps = {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline';
} & HTMLAttributes<HTMLDivElement>;

export type CardProps = HTMLAttributes<HTMLDivElement>;

export type AlertProps = {
  variant?: 'default' | 'destructive';
} & HTMLAttributes<HTMLDivElement>;

export type TabsProps = {
  value?: string;
  onValueChange?: (value: string) => void;
} & HTMLAttributes<HTMLDivElement>;

export type ToggleProps = {
  variant?: 'default' | 'outline';
  size?: 'default' | 'sm' | 'lg';
  pressed?: boolean;
  onPressedChange?: (pressed: boolean) => void;
} & HTMLButtonAttributes;

export type SwitchProps = {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
} & HTMLAttributes<HTMLButtonElement>;

export type CheckboxProps = {
  checked?: boolean | 'indeterminate';
  onCheckedChange?: (checked: boolean | 'indeterminate') => void;
  disabled?: boolean;
} & HTMLAttributes<HTMLButtonElement>;

export type LabelProps = HTMLAttributes<HTMLLabelElement>;

export type SeparatorProps = {
  orientation?: 'horizontal' | 'vertical';
  decorative?: boolean;
} & HTMLAttributes<HTMLDivElement>;

export type SkeletonProps = HTMLAttributes<HTMLDivElement>;
