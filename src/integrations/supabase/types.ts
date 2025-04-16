export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      blogs: {
        Row: {
          author: string
          author_image: string | null
          category: string
          content: string
          excerpt: string
          featured_image: string
          id: string
          is_published: boolean
          published_at: string
          read_time: string
          slug: string
          title: string
          updated_at: string
        }
        Insert: {
          author: string
          author_image?: string | null
          category: string
          content: string
          excerpt: string
          featured_image: string
          id?: string
          is_published?: boolean
          published_at?: string
          read_time: string
          slug: string
          title: string
          updated_at?: string
        }
        Update: {
          author?: string
          author_image?: string | null
          category?: string
          content?: string
          excerpt?: string
          featured_image?: string
          id?: string
          is_published?: boolean
          published_at?: string
          read_time?: string
          slug?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      early_access_signups: {
        Row: {
          created_at: string
          email: string
          id: string
          name: string | null
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          name?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          name?: string | null
        }
        Relationships: []
      }
      faq_categories: {
        Row: {
          display_order: number
          id: string
          name: string
          slug: string
        }
        Insert: {
          display_order?: number
          id?: string
          name: string
          slug: string
        }
        Update: {
          display_order?: number
          id?: string
          name?: string
          slug?: string
        }
        Relationships: []
      }
      faq_items: {
        Row: {
          answer: string
          category_id: string
          display_order: number
          id: string
          question: string
        }
        Insert: {
          answer: string
          category_id: string
          display_order?: number
          id?: string
          question: string
        }
        Update: {
          answer?: string
          category_id?: string
          display_order?: number
          id?: string
          question?: string
        }
        Relationships: [
          {
            foreignKeyName: "faq_items_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "faq_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      help_center_topics: {
        Row: {
          content: string
          created_at: string
          id: string
          topic: string
          updated_at: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          topic: string
          updated_at?: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          topic?: string
          updated_at?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string
          email: string
          id: string
          name: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          email: string
          id: string
          name?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          name?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      testimonials: {
        Row: {
          author_avatar: string | null
          author_handle: string | null
          author_name: string
          author_title: string | null
          content: string
          created_at: string
          href: string | null
          id: string
          rating: number | null
        }
        Insert: {
          author_avatar?: string | null
          author_handle?: string | null
          author_name: string
          author_title?: string | null
          content: string
          created_at?: string
          href?: string | null
          id?: string
          rating?: number | null
        }
        Update: {
          author_avatar?: string | null
          author_handle?: string | null
          author_name?: string
          author_title?: string | null
          content?: string
          created_at?: string
          href?: string | null
          id?: string
          rating?: number | null
        }
        Relationships: []
      }
      user_intents: {
        Row: {
          comments: string | null
          contribution_type: string[]
          created_at: string
          email: string
          id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          comments?: string | null
          contribution_type: string[]
          created_at?: string
          email: string
          id?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          comments?: string | null
          contribution_type?: string[]
          created_at?: string
          email?: string
          id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
