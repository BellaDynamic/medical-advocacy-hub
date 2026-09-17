# Google AI / Gemini Bulk Export — Exact Recovery Path

**Use this when the material is spread across many very long Gemini/Google AI chats.** This is an account-level capture. You do **not** need to copy or export the chats one by one.

> **Do not delete, rename, or clear any Gemini chats before the archive is downloaded and checked.** A Google Takeout archive does not include data already deleted from Google systems.[1]

## What this captures

Google Takeout can export the saved **Gemini Apps** activity as one archive. A current institutional Google guide states that the export produces an HTML file containing Gemini chat threads.[2] This is the correct first capture for a corpus made up of many long chats.

The chat archive is **not assumed to include every original attachment file**. Original PDFs, DOCX files, spreadsheets, images, genetic reports, and radiology reports must be preserved separately when they live in Google Drive or only inside Gemini/NotebookLM.

## Do this now — five clicks/steps

1. Open **[Google Takeout](https://takeout.google.com/)** in the **same Google account** that holds the Gemini chats.
2. Select **Deselect all**.
3. Find **My Activity**, check it, then select **All activity data included**.
4. Select **Deselect all** inside that dialog, then check **Gemini Apps** only and choose **OK**. This selects the account-level Gemini chat history rather than one visible conversation.[2]
5. Scroll down, choose **Next step**, then choose:
   - **Delivery method:** **Add to Drive**
   - **Export:** **One-time archive**
   - **File type:** **ZIP**
   - **Archive size:** choose the largest available size (to minimize split ZIP files)
   - Select **Create export**.

Google will create the archive and place it in Drive or email a link. Official Google guidance says this can take from minutes to days, depending on account size.[1]

## Also preserve NotebookLM / Gemini Notebook material

In the Takeout product list, search for any entry named **Gemini Notebook**, **NotebookLM**, or similar and include it if available. For managed Google Workspace accounts, Google’s Data Export documentation says Gemini Notebook data can include chat history, generated audio overviews, uploaded content, and generated notes.[3]

For a personal account, if no NotebookLM/Gemini Notebook item appears in Takeout, **do not assume the Gemini export contains notebook sources or outputs**. Preserve those separately:

1. Leave every notebook intact.
2. In each high-value notebook, preserve the original source files in Google Drive where possible.
3. Export or save its generated notes/briefing documents/audio where the NotebookLM interface offers that option.
4. Create a short text file called `NOTEBOOKLM_MANIFEST.md` listing each notebook title, its source names, and its key outputs. This is a fallback only if account-level NotebookLM export is unavailable.

## Preserve original source files in the same Drive package

Create or use one Drive folder named:

```text
MEDICAL_ADVOCACY_GEMINI_BULK_CAPTURE_YYYY-MM-DD
```

Put the Takeout ZIP in that folder. If feasible, add these subfolders **without modifying originals**:

```text
01_GEMINI_TAKEOUT_ARCHIVE
02_NOTEBOOKLM_EXPORTS_OR_MANIFESTS
03_ORIGINAL_LABS_GENETICS_IMAGING
04_DIAGRAMS_TABLES_VISUALS
05_LEGAL_AND_PROVIDER_CORRESPONDENCE
06_README_AND_FILE_INDEX
```

For every original report you find, copy it into the appropriate folder. Keep its filename unchanged. If you need a helpful label, add it only to the beginning, for example:

```text
2026-08-03__UCLA__IgA-and-Celiac-Panel.pdf
2023-03-07__Variantyx__Whole-Genome-Report.pdf
```

## Create this one small index file

In `06_README_AND_FILE_INDEX`, create `TRANSFER_INDEX.md` containing the following for each major Gemini chat or NotebookLM notebook:

```markdown
## Title of Gemini Chat or Notebook
- Google AI location: Gemini chat / NotebookLM notebook
- Date range: earliest date to latest date
- Main subjects: e.g., vascular, immune/BMT, kidney/liver, endocrinology/mineral, neuro, GI
- Original files named in the chat: list exact filenames if known
- Derived outputs: diagrams, tables, summaries, diagnostic paths, timelines
- Important warning: indicate whether this entry is original evidence, patient history, AI analysis, requested review, or unverified
- Transfer priority: critical / high / routine
```

Do **not** try to rewrite the long chats into new summaries first. The Takeout archive is the raw preservation copy; the index only tells us how to process it.

## What to send here after Google finishes

Because a complete Takeout archive is likely much larger than the website’s individual upload limit, **do not try to send the giant ZIP through the Merge Hub first**.

Instead:

1. Let Google add the ZIP to Drive.
2. Move the ZIP into the `MEDICAL_ADVOCACY_GEMINI_BULK_CAPTURE_YYYY-MM-DD` Drive folder.
3. Paste the **Google Drive folder link** into this chat.
4. State only: **“The Gemini bulk export is ready in this folder.”**

I can then inventory and process the Drive archive in batches, preserve the raw chat HTML, identify every named original source, and add the materials to the source vault/evidence ledger without converting Gemini analysis into clinical fact.

## If the Takeout archive is missing the chats

1. Confirm you used the **same Google account** as the Gemini chats.
2. Open **[Gemini Apps Activity](https://myactivity.google.com/product/gemini)** and confirm the chats are still present in account activity.[2]
3. Re-run Takeout using **My Activity → All activity data included → Gemini Apps**.
4. If the repeated archive still lacks the corpus, do **not** use unreviewed third-party browser extensions on private health records. Send a screenshot of the Takeout product-selection screen and the Drive archive’s top-level filenames; I will identify the least-lossy next capture step.

## References

[1] [Google Account Help — How to download your Google data](https://support.google.com/accounts/answer/3024190?hl=en)

[2] [University of Michigan ITS — Google: Export Gemini Chat History](https://teamdynamix.umich.edu/TDClient/30/Portal/KB/Article/15439/Google-Export-Gemini-Chat-History)

[3] [Google Workspace Help — Export Gemini Notebook data](https://knowledge.workspace.google.com/admin/migrate/export-gemini-notebook-data)
