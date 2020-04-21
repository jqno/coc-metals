import { Event } from "vscode-jsonrpc";
import { Position, TextDocument } from "vscode-languageserver-protocol";
import {
  MetalsTreeViewNode,
  MetalsTreeRevealResult,
} from "metals-languageclient";

export interface TreeViewProvider {
  viewId: string;

  updatedNodes: Event<MetalsTreeViewNode>;

  loadNodeChildren(parentNode?: string): Thenable<MetalsTreeViewNode[]>;

  loadParentInfo(
    docPositionParams: TextDocument,
    position: Position
  ): Thenable<MetalsTreeRevealResult>;

  sendTreeViewVisibilityNotification(visible: boolean): void;

  sendTreeNodeVisibilityNotification(
    childNode: string,
    collapsed: boolean
  ): void;
}
