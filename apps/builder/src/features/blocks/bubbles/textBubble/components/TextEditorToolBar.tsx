import {
  BoldIcon,
  BracesIcon,
  ItalicIcon,
  LinkIcon,
  UnderlineIcon,
} from "@/components/icons";
import {
  HStack,
  IconButton,
  type StackProps,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  MARK_BOLD,
  MARK_ITALIC,
  MARK_UNDERLINE,
} from "@udecode/plate-basic-marks";
import { getPluginType, useEditorRef } from "@udecode/plate-core";
import { LinkToolbarButton } from "./plate/LinkToolbarButton";
import { MarkToolbarButton } from "./plate/MarkToolbarButton";

type Props = {
  onVariablesButtonClick: () => void;
} & StackProps;

export const TextEditorToolBar = ({
  onVariablesButtonClick,
  ...props
}: Props) => {
  const editor = useEditorRef();

  const handleVariablesButtonMouseDown = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    onVariablesButtonClick();
  };
  return (
    <HStack
      bgColor={useColorModeValue("white", "gray.900")}
      borderTopRadius="md"
      p={2}
      w="full"
      boxSizing="border-box"
      borderBottomWidth={1}
      {...props}
    >
      <IconButton
        aria-label="Insert variable"
        size="sm"
        onMouseDown={handleVariablesButtonMouseDown}
        icon={<BracesIcon />}
      />
      <span data-testid="bold-button">
        <MarkToolbarButton
          nodeType={getPluginType(editor, MARK_BOLD)}
          icon={<BoldIcon />}
          aria-label="Toggle bold"
        />
      </span>
      <span data-testid="italic-button">
        <MarkToolbarButton
          nodeType={getPluginType(editor, MARK_ITALIC)}
          icon={<ItalicIcon />}
          aria-label="Toggle italic"
        />
      </span>
      <span data-testid="underline-button">
        <MarkToolbarButton
          nodeType={getPluginType(editor, MARK_UNDERLINE)}
          icon={<UnderlineIcon />}
          aria-label="Toggle underline"
        />
      </span>
      <span data-testid="link-button">
        <LinkToolbarButton icon={<LinkIcon />} aria-label="Add link" />
      </span>
    </HStack>
  );
};
