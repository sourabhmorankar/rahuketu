export interface Icon {
    id: string;
    icon: string;
    label: string;
    action: () => void;
    visible: boolean;
}
