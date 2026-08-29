import { getContext, setContext } from 'svelte';

export type accordionValue = string | string[] | undefined;

export interface AccordionContext {
  value: accordionValue;
  onValueChange: (value: accordionValue) => void;
  type: 'single' | 'multiple';
}

const ACCORDION_KEY = Symbol('accordion');

export function setAccordionContext(context: AccordionContext) {
  setContext(ACCORDION_KEY, context);
}

export function getAccordionContext(): AccordionContext {
  return getContext(ACCORDION_KEY);
}

export interface DialogContext {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DIALOG_KEY = Symbol('dialog');

export function setDialogContext(context: DialogContext) {
  setContext(DIALOG_KEY, context);
}

export function getDialogContext(): DialogContext {
  return getContext(DIALOG_KEY);
}

export interface SelectContext {
  value: string | undefined;
  onValueChange: (value: string) => void;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SELECT_KEY = Symbol('select');

export function setSelectContext(context: SelectContext) {
  setContext(SELECT_KEY, context);
}

export function getSelectContext(): SelectContext {
  return getContext(SELECT_KEY);
}

export interface DropdownMenuContext {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DROPDOWN_KEY = Symbol('dropdown');

export function setDropdownContext(context: DropdownMenuContext) {
  setContext(DROPDOWN_KEY, context);
}

export function getDropdownContext(): DropdownMenuContext {
  return getContext(DROPDOWN_KEY);
}

export interface TabsContext {
  value: string;
  onValueChange: (value: string) => void;
}

const TABS_KEY = Symbol('tabs');

export function setTabsContext(context: TabsContext) {
  setContext(TABS_KEY, context);
}

export function getTabsContext(): TabsContext {
  return getContext(TABS_KEY);
}

export interface RadioGroupContext {
  value: string;
  onValueChange: (value: string) => void;
}

const RADIO_KEY = Symbol('radio');

export function setRadioContext(context: RadioGroupContext) {
  setContext(RADIO_KEY, context);
}

export function getRadioContext(): RadioGroupContext {
  return getContext(RADIO_KEY);
}

export interface PopoverContext {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const POPOVER_KEY = Symbol('popover');

export function setPopoverContext(context: PopoverContext) {
  setContext(POPOVER_KEY, context);
}

export function getPopoverContext(): PopoverContext {
  return getContext(POPOVER_KEY);
}
